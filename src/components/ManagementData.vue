<template>
  <div>
    <h1>Manajemen Data</h1>

    <div class="card" style="margin-top:18px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <input v-model="searchQuery" class="input" placeholder="Cari nama almarhum atau warga..." style="width:620px" />
      </div>

      <div style="margin-top:18px">
        <div>
          <select v-model="filterStatus" class="dropdown">
            <option value="">Semua Status</option>
            <option value="Belum Diverifikasi">Belum Diverifikasi</option>
            <option value="Disetujui">Disetujui</option>
            <option value="Ditolak">Ditolak</option>
          </select>

          <select v-model="filterMonth" class="dropdown">
            <option value="">Semua Bulan</option>
            <option value="Januari">Januari</option>
            <option value="Februari">Februari</option>
            <option value="Maret">Maret</option>
            <option value="April">April</option>
            <option value="Mei">Mei</option>
            <option value="Juni">Juni</option>
            <option value="Juli">Juli</option>
            <option value="Agustus">Agustus</option>
            <option value="September">September</option>
            <option value="Oktober">Oktober</option>
            <option value="November">November</option>
            <option value="Desember">Desember</option>
          </select>
        </div>
      </div> 

      <div style="margin-top:18px">
        <div style="display:flex;gap:10px">
          <button
            class="cardBtn"
            :style="{
              borderRadius: '20px',
              background: currentTableType === 'almarhum' ? 'var(--mint-100)' : '#ffffff',
            }"
            @click="filterData('almarhum')"
          >
            Data Almarhum
          </button>
          <button
            class="cardBtn"
            :style="{
              borderRadius: '20px',
              background: currentTableType === 'ahliWaris' ? 'var(--mint-100)' : '#ffffff',
            }"
            @click="filterData('ahliWaris')"
          >
            Data Ahli Waris
          </button>
          <button
            class="cardBtn"
            :style="{
              borderRadius: '20px',
              background: currentTableType === 'pengurus' ? 'var(--mint-100)' : '#ffffff',
            }"
            @click="filterData('pengurus')"
          >
            Data Pengurus & Surat Kuasa
          </button>
          <button
            class="cardBtn"
            :style="{
              borderRadius: '20px',
              background: currentTableType === 'dokumen' ? 'var(--mint-100)' : '#ffffff',
            }"
            @click="filterData('dokumen')"
          >
            Dokumen Pendukung
          </button>
          <button
            class="cardBtn"
            :style="{
              borderRadius: '20px',
              background: currentTableType === 'surat' ? 'var(--mint-100)' : '#ffffff',
            }"
            @click="filterData('surat')"
          >
            Surat Pernyataan
          </button>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:22px">
        <h3>{{ tableName }}</h3>
      </div>
      <div style="margin-top:18px">
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th>Nama Almarhum</th>
              <th>Hubungan</th>
              <th>Almarhum</th>
              <th>Alamat</th>
              <th>Status Verifikasi</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in filteredRows" :key="idx">
              <td><input type="checkbox" /></td>
              <td>{{ row.name }}</td>
              <td>{{ row.relation }}</td>
              <td>{{ row.deceased }}</td>
              <td>{{ row.address }}</td>
              <td>
                <span :style="{padding:'6px 8px',borderRadius:'8px',background:row.statusColor}">
                  {{ row.status }}
                </span>
              </td>
              <td>
                <button class="btn" style="background:#fff;color:var(--mint-400);border:1px solid var(--mint-400)" @click="viewData(row)">
                  Lihat Detail
                </button>
                <button class="btn" style="margin-left:10px">Verifikasi</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="margin-top:18px">
        <button class="btn" @click="addData" style="margin-left:80%">+ Tambah Data</button>
      </div>

      <div style="margin-top:18px" class="card info-box">
        <strong>Informasi Watermark Otomatis</strong>
        <div class="small">
          Semua file yang diunduh dari sistem ini akan otomatis diberi watermark "Data Resmi Kelurahan Pulo Gebang" untuk menjaga keaslian dokumen.
        </div>
      </div>
    </div>

    <!-- Modal for Lihat Detail -->
    <div v-if="selectedData" class="modal">
      <div class="modal-content">
        <h3>Detail Data Ahli Waris</h3>
        <p><strong>Status Verifikasi:</strong> {{ selectedData.status }}</p>
        <p><strong>Nama Lengkap:</strong> {{ selectedData.name }}</p>
        <p><strong>Hubungan:</strong> {{ selectedData.relation }}</p>
        <p><strong>Nama Almarhum:</strong> {{ selectedData.deceased }}</p>
        <p><strong>Alamat:</strong> {{ selectedData.address }}</p>
        <button class="btn" @click="closeModal">Tutup</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManagementData',
  data() {
    return {
      searchQuery: '',
      filterStatus: '',
      filterMonth: '',
      selectedData: null,
      tableName: 'Daftar Pengajuan Ahli Waris',
      currentTableType: 'ahliWaris',
      rows: [
        {
          name: 'Siti Aminah',
          relation: 'Anak Kandung',
          deceased: 'Budi Santoso',
          address: 'Jl. Raya Pulo Gebang',
          status: 'Belum Diverifikasi',
          statusColor: '#FFEECD',
        },
        {
          name: 'Dewi Lestari',
          relation: 'Istri',
          deceased: 'Ahmad Yani',
          address: 'Jl. Mawar No. 45',
          status: 'Disetujui',
          statusColor: '#DFF4E7',
        },
      ],
    };
  },
  computed: {
    filteredRows() {
      return this.rows.filter((row) => {
        const matchesStatus = this.filterStatus ? row.status === this.filterStatus : true;
        const matchesMonth = this.filterMonth ? row.date?.includes(this.filterMonth) : true;
        const matchesSearch = row.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesStatus && matchesMonth && matchesSearch;
      });
    },
  },
  methods: {
    filterData(type) {
      const tableData = {
        almarhum: {
          name: 'Daftar Data Almarhum',
          rows: [
            {
              name: 'Siti Aminah',
              relation: 'Anak Kandung',
              deceased: 'Budi Santoso',
              address: 'Jl. Raya Pulo Gebang',
              status: 'Belum Diverifikasi',
              statusColor: '#FFEECD',
            },
          ],
        },
        ahliWaris: {
          name: 'Daftar Data Ahli Waris',
          rows: [
            {
              name: 'Dewi Lestari',
              relation: 'Istri',
              deceased: 'Ahmad Yani',
              address: 'Jl. Mawar No. 45',
              status: 'Disetujui',
              statusColor: '#DFF4E7',
            },
          ],
        },
        pengurus: {
          name: 'Daftar Data Pengurus & Surat Kuasa',
          rows: [
            {
              name: 'Pengurus A',
              relation: 'Pengurus',
              deceased: 'Almarhum A',
              address: 'Jl. Pengurus',
              status: 'Ditolak',
              statusColor: '#FFCCCC',
            },
          ],
        },
        dokumen: {
          name: 'Daftar Dokumen Pendukung',
          rows: [
            {
              name: 'Dokumen A',
              relation: 'Pendukung',
              deceased: 'Almarhum B',
              address: 'Jl. Dokumen',
              status: 'Disetujui',
              statusColor: '#DFF4E7',
            },
          ],
        },
        surat: {
          name: 'Daftar Surat Pernyataan',
          rows: [
            {
              name: 'Surat A',
              relation: 'Pernyataan',
              deceased: 'Almarhum C',
              address: 'Jl. Surat',
              status: 'Belum Diverifikasi',
              statusColor: '#FFEECD',
            },
          ],
        },
      };

      this.tableName = tableData[type].name;
      this.rows = tableData[type].rows;
      this.currentTableType = type;
    },
    downloadData() {
      console.log('Downloading all data...');
      // Implement download logic
    },
    addData() {
      console.log('Adding new data...');
      // Implement add data logic
    },
    viewData(row) {
      const modalData = {
        almarhum: {
          status: row.status,
          name: row.name,
          relation: row.relation,
          deceased: row.deceased,
          address: row.address,
          extraInfo: 'Additional info for Almarhum',
        },
        ahliWaris: {
          status: row.status,
          name: row.name,
          relation: row.relation,
          deceased: row.deceased,
          address: row.address,
          extraInfo: 'Additional info for Ahli Waris',
        },
        pengurus: {
          status: row.status,
          name: row.name,
          relation: row.relation,
          deceased: row.deceased,
          address: row.address,
          extraInfo: 'Additional info for Pengurus',
        },
        dokumen: {
          status: row.status,
          name: row.name,
          relation: row.relation,
          deceased: row.deceased,
          address: row.address,
          extraInfo: 'Additional info for Dokumen',
        },
        surat: {
          status: row.status,
          name: row.name,
          relation: row.relation,
          deceased: row.deceased,
          address: row.address,
          extraInfo: 'Additional info for Surat',
        },
      };

      this.selectedData = {
        ...modalData[this.currentTableType],
      };
    },
    closeModal() {
      this.selectedData = null;
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
  text-align: left;
  font-size: 14px;
}

.table thead th {
  background: transparent;
  color: var(--muted);
  font-weight: 600;
}

.input {
  display: block;
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #eee;
  margin-top: 8px;
}

.dropdown {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fff;
  color: #333;
  cursor: pointer;
}

.btn {
  display: inline-block;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid #1fa87b;
  background: #1fa87b;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.card {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(16, 31, 20, 0.06);
  margin-bottom: 20px;
}

.cardBtn {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(0, 255, 68, 0.06);
  margin-bottom: 20px;
  cursor: pointer;
}

.info-box {
  background: #eaf6f0;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #dff3e8;
}

.small {
  font-size: 13px;
  color: #6b6b6b;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
}
</style>
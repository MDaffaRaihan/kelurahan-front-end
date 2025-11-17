<template>
  <div>
    <div class="header-row">
      <div class="header-left">
        <h1>Halaman Utama</h1>
        <div class="pills">
          <div
            class="card info-box"
            style="min-width:220px"
            v-for="(info, index) in dynamicInfo"
            :key="index"
            :style="{
              boxShadow: `0 6px 18px ${info.glowColor}`,
              backgroundColor: info.Color,
              border: `2px solid ${info.glowColor}`
            }"
          >
            <div><strong>{{ info.text }}</strong></div>
            <div class="small">{{ info.count }} item</div>
          </div>
        </div>
      </div>

      <div class="header-right">
        <div class="card" style="width:40px;text-align:center;border-radius:12px;padding:12px"> <!-- avatar -->
          <div style="width:40px;height:40px;background:#cfeee0;border-radius:50%;margin:0 auto"></div>
        </div>
      </div>
    </div>

    <h3 style="margin-top:22px">Shortcuts</h3>
    <div class="shortcut-grid">
      <div class="card" v-for="shortcut in shortcuts" :key="shortcut.name" style="text-align:center">
        <a :href="shortcut.link" style="text-decoration:none;color:inherit">
          <div style="font-size:20px;color:var(--mint-400)">⤴</div>
          <div style="margin-top:8px;font-weight:600">{{ shortcut.name }}</div>
        </a>
      </div>
    </div>

    <h3 style="margin-top:22px">Statistik Singkat</h3>
    <div class="stat-grid">
      <div class="cardDashboard" v-for="(item,i) in 5" :key="i" style="text-align:center">
        <div style="font-weight:700;font-size:22px"> {{ [500,23,347,524,48][i] }} </div>
        <div class="small"> {{ ['Total Data Ahli Waris','Data Belum Diverifikasi','Surat Pernyataan Jadi','Dokumen Diterima','Laporan Bulan Ini'][i] }} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      dynamicInfo: [
        { text: 'Ada 3 pengajuan baru yang belum diverifikasi', count: 3, glowColor: 'orange', Color: '#fff4e5' },
        { text: '1 dokumen pendukung gagal diverifikasi', count: 1, glowColor: 'red', Color: '#ffe5e5' },
        { text: '15 surat pernyataan telah disetujui hari ini', count: 15, glowColor: 'green', Color: '#e5fff0' },
      ],
      shortcuts: [
        { name: 'Tambah Data Ahli Waris', link: '/management' },
        { name: 'Tambah Almarhum', link: '/data-almarhum' },
        { name: 'Tambah Surat Pernyataan', link: '/surat-pernyataan' },
      ],
    };
  },
}

</script>

<style scoped>
.header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
}

.header-left h1 {
  font-size: 36px;
  margin: 0;
}

.pills {
  display: flex;
  gap: 12px;
  margin-top: 16px;
  justify-content: center;
}

.shortcut-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 18px;
  margin-top: 18px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
  margin-top: 18px;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(16, 31, 20, 0.06);
  margin-bottom: 20px;
  cursor: pointer;
  
}.cardDashboard {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(16, 31, 20, 0.06);
  margin-bottom: 20px;
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
</style>
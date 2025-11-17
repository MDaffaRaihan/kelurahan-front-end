<template>
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Nama Ahli Waris</th>
        <th>Hubungan</th>
        <th>Almarhum</th>
        <th>Alamat</th>
        <th>Status Verifikasi</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, idx) in rows" :key="idx">
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
</template>

<script>
export default {
  name: 'AhliWarisTable',
  props: {
    rows: Array,
    viewData: Function,
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
</style>
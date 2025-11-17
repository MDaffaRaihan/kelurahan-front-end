<template>
  <div>
    <h1>Pengaturan</h1>
    <div style="display:flex;gap:22px;margin-top:18px">
      <div class="card" style="flex:1;min-width:420px">
        <h3>Profil Admin / Akun Kelurahan</h3>
        <p class="small">Informasi akun administrator Kelurahan Pulo Gebang</p>

        <div style="margin-top:12px">
          <label class="small">Nama Admin</label>
          <input class="input" value="Admin" />
        </div>
        <div style="margin-top:10px">
          <label class="small">Jabatan</label>
          <input class="input" value="Admin" />
        </div>
        <div style="display:flex;gap:12px;margin-top:12px">
          <button class="btn">Simpan Perubahan</button>
          <button class="card" style="padding:10px 14px">Keluar dari Akun</button>
        </div>
      </div>

      <div class="card" style="width:420px">
        <h3>Backup & Restore Data</h3>
        <p class="small">Kelola cadangan data sistem ahli waris</p>
        <div class="info-box" style="margin-top:10px">Terakhir Backup: 12 Oktober 2025, 10:45 WIB</div>
        <div style="margin-top:12px">
          <button class="btn" style="width:100%">Download Backup Data (.zip)</button>
        </div>
        <div style="margin-top:10px">
          <button class="card" style="width:100%;padding:12px;border:1px solid #cfeee0">Upload Backup Lama</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings'
}
</script>

<style scoped>
.card {
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

.input {
  display: block;
  width: 95%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #eee;
  margin-top: 8px;
}

.btn {
  display: inline-block;
  padding: 10px 16px;
  border-radius: 10px;
  background: #1fa87b;
  color: #fff;
  text-decoration: none;
}
</style>
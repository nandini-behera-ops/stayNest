<script>
  const map = L.map('map').setView([20.9517, 85.0985], 7);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.marker([20.9517, 85.0985]).addTo(map) .bindPopup("Odisha") .openPopup();
</script>;

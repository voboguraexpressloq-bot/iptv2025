const channels = [
  {name:"১০০০+ HD চ্যানেল (বাংলা+স্পোর্টস+মুভি)", 
   url:"https://iptv-org.github.io/iptv/index.m3u"}
];

let html = '';
channels.forEach(c => {
  html += `<div class="channel" onclick="play('${c.url}')">${c.name}</div>`;
});
document.getElementById('channelList').innerHTML = html;

function searchChannel() {
  let input = document.getElementById('search').value.toLowerCase();
  let filtered = channels.filter(c => c.name.toLowerCase().includes(input));
  let html = '';
  filtered.forEach(c => {
    html += `<div class="channel" onclick="play('${c.url}')">${c.name}</div>`;
  });
  document.getElementById('channelList').innerHTML = html;
}

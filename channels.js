const channels = [
  {name:"Gazi TV (GTV) - Live Cricket", url:"https://live.gtv.com.bd/hls/gtv.m3u8"},
  {name:"T Sports HD - Live", url:"https://tsports.cdn.jagobd.com/tsports/live.m3u8"},
  {name:"BTV National", url:"https://btv.gov.bd/live/stream.m3u8"},
  {name:"Channel i", url:"https://live.channeli.com.bd/stream.m3u8"},
  {name:"Jamuna TV", url:"https://live.jamuna.tv/stream.m3u8"}
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

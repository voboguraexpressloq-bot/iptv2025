const channels = [
{name:"Star Sports 1 HD",url:"https://live-sports.cdn.workers.dev/starsports1.m3u8"},
{name:"Star Sports 2 HD",url:"https://live-sports.cdn.workers.dev/starsports2.m3u8"},
{name:"Sony Ten 1 HD",url:"https://live-sports.cdn.workers.dev/ten1.m3u8"},
{name:"Sony Six HD",url:"https://live-sports.cdn.workers.dev/sonysix.m3u8"},
{name:"BEIN Sports HD",url:"https://bein1-live.hls.live/index.m3u8"},
{name:"Zee Bangla HD",url:"https://zee5-live.akamaized.net/zeebangla.m3u8"},
{name:"Colors Bangla",url:"https://colors-live.cdn.live/colorsbangla.m3u8"},
{name:"ATN Bangla",url:"https://atn-live.cdn.live/atnbangla.m3u8"},
{name:"NTV",url:"https://ntv-live.cdn.live/ntv.m3u8"},
{name:"Channel i",url:"https://channeli-live.cdn.live/channeli.m3u8"}
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

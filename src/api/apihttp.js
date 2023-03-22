// const apiKey = "AIzaSyCvc869BKpKTJLBt0j5mlzP4QB7y4I5KfA";
// const apiKey = "AIzaSyC9hRzrFkvBRAyGM2wHFaWXW5uGBPincZA";
// const apiKey = "AIzaSyAVadHEsVxVE6GURzxc58hmoh7n_gauLLY";

// const apiKey = "AIzaSyCHQ2qnYR9EnxwxlC7zHCBIgeF7fkCrnxk";
// const apiKey = "AIzaSyAO9mULKgUiURhM6QHZTLnf3ZQUVT6xEno";
// const apiKey = "AIzaSyBBrqvPLMKW3dzDaFyi1lh5L_68oYoR4ck";
// const apiKey = "AIzaSyDF01syczjj6-UtRx-gfaDQFVJyhREbnxY";

// const apiKey = "AIzaSyCHQ2qnYR9EnxwxlC7zHCBIgeF7fkCrnxk";
// const apiKey = "AIzaSyAO9mULKgUiURhM6QHZTLnf3ZQUVT6xEno";
// const apiKey = "AIzaSyBBrqvPLMKW3dzDaFyi1lh5L_68oYoR4ck";

// const apiKey = "AIzaSyCym_Cu1EPmjygHkp6a-poNESiUEeYPiig";

const apiKey = "AIzaSyDcPq3UZvdGe8lW7eIxnInj6jX-l9p_mHE";

export function playlistApi(playlistid) {
  return `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=${playlistid}&key=${apiKey} `;
}
export function videoApi(videoid) {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoid}&key=${apiKey}`;
}

export function DataFilter(array) {
  let returnarray = [];
  array.map((data) => {
    let videodata = {
      id: data.id,
      url: `https://www.youtube.com/watch?v=${data.id}`,
      title: data.snippet.title,
      channeltitle: data.snippet.channelTitle,
      time: data.snippet.publishedAt,
      viewconut: data.statistics.viewCount,
      likecount: data.statistics.likeCount,
      thumbnail: data.snippet.thumbnails.default.url,
    };
    returnarray.push(videodata);
  });
  return returnarray;
}

export function playlisturl(musics) {
  let returndata = [];
  musics.map((data) => {
    returndata.push(data.url);
  });
  return returndata;
}

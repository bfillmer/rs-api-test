
import reqwest from 'reqwest';

export const getGaiaVideos = () => new Promise((resolve, reject) => {
  reqwest({
    url: 'http://www.gaia.com/api/videos/term/119931',
    type: 'json',
  }).then(
    (r) => resolve(r),
    (e) => reject(e)
  );
});

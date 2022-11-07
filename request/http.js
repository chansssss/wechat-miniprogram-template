const baseApiUrl = '/';
const baseHeader = {
  'content-type': 'application/json',
};

function http(url, data, method = 'GET', header) {
  let requestConfig = {
    path: url,
    data: data,
    method: method,
    header: header,
  };
  requestConfig = onRequest(requestConfig);
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseApiUrl + requestConfig.url,
      data: requestConfig.data,
      method: requestConfig.method,
      header: {
        ...baseHeader,
        ...requestConfig.header,
      },
      success(res) {
        resolve(onResponse(res));
      },
      fail(error) {
        reject(onError(error));
      },
    });
  });
}

//请求拦截
function onRequest(config) {
  return config;
}

//响应拦截
function onResponse(response) {
  return response;
}

//请求错误拦截
function onError(error) {}

_satellite.pushAsyncScript(function(event, target, $variables){
  var set_dD = function set_dD(_ref) {
    var _ref$w = _ref.w,
        w = _ref$w === undefined ? {} : _ref$w;

    w.digitalData = w.hasOwnProperty('digitalData') ? w.digitalData : {};
    w.digitalData.page = w.digitalData.hasOwnProperty('page') ? w.digitalData.page : {};
    w.digitalData.page.meta = w.digitalData.page.hasOwnProperty('meta') ? w.digitalData.page.meta : {};
    w.digitalData.page.meta.isloaded = "true";
    return w.digitalData;
};
set_dD({w: window})
});

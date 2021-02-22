function post_download(req, res, next) {
  return res.status(200).json({ message: "Downloaded successfully", errors: false });
}

module.exports = {
  post_download,
};

const path = require("path");

const dir = path.dirname(require.main.filename);

function get_download(req, res, next) {
  const filename = req.params.filename;

  const file_path = path.join(dir, "files", filename);

  res.download(file_path, "CV.pdf", function (err) {
    if (err) {
      // Handle error, but keep in mind the response may be partially-sent
      // so check res.headersSent
      if (res.headersSent) {
        return console.log(res.headersSent);
      } else {
        return res.status(500).json({ message: "Downloaded unsuccessfully", errors: err });
      }
    } else {
      return res.status(200).json({ message: `Downloaded ${filename} successfully`, errors: false });
    }
  });
}

module.exports = {
  get_download,
};

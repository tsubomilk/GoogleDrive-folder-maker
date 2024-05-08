function createFolders() { // 関数名：createFolders - フォルダを作成する関数
  // フォルダ ID を置き換える
  var folderId = "XXXXXXXXXXXXXXXXXX"; // 変数：folderId - フォルダ ID を格納

  // A から Z までの文字列を格納
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 変数：chars - A から Z までの文字列

  // chars 変数の長さ分ループする
  for (var i = 0; i < chars.length; i++) {
    // chars[i] を取得
    var folderName = chars.charAt(i); // 変数：folderName - ループ中の文字

    // folderId で指定された親フォルダに、folderName の名前でフォルダを作成
    var folder = DriveApp.getFolderById(folderId).createFolder(folderName); // 変数：folder - 作成されたフォルダ
  }
}

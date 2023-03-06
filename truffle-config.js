const path = require("path");
module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  solidityLog: {
    displayPrefix: ' :',
    preventConsoleLogMigration: true // 禁止在主网上记录控制台输出
  },
  networks: {
    development: {
      network_id: "1337",
      port: 7545,
      host: "192.168.3.15"
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        }
      }
    }
  }
};

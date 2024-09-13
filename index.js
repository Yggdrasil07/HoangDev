  //this is my source code, pls dont mod them  
  const { spawn } = 
  require("child_process");
  const { readFileSync } = require("fs-extra");
  const http = require("http");
  const axios = require("axios");
  const semver = require("semver");
  const logger = require("./utils/log");
  const chalk = require('chalkercli');
const chalk1 = require('chalk');
const os = require('os');
  /////////////////////////////////////////////
  //========= Check node.js version =========//
  /////////////////////////////////////////////

  // const nodeVersion = semver.parse(process.version);
  // if (nodeVersion.major < 13) {
  //     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
  //     return process.exit(0);
  // };

  ///////////////////////////////////////////////////////////
  //========= Create website for dashboard/uptime =========//
  ///////////////////////////////////////////////////////////
var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066", "0033FF", "FF9999", "00FF66", "00FFFF","CCFFFF","8F00FF","FF00CC","FF0000","FF1100","FF3300","FF4400","FF5500","FF6600","FF7700","FF8800","FF9900","FFaa00","FFbb00","FFcc00","FFdd00","FFee00","FFff00","FFee00","FFdd00","FFcc00","FFbb00","FFaa00","FF9900","FF8800","FF7700","FF6600","FF5500","FF4400","FF3300","FF2200","FF1100"];
    var random = 
job[Math.floor(Math.random() * job.length)]
  const express = require('express');
  const path = require('path');

  const app = express();

  // sendFile will go here
app.listen(3000, function () {
 console.log(chalk1.hex("#" + random)(`[ Bắt đầu ] → Máy chủ đang khởi động...\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`), "");
}); 
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
  const rainbow = chalk.rainbow(`\n
  ██╗░░██╗░█████╗░░█████╗░███╗░░██╗░██████╗░
  ██║░░██║██╔══██╗██╔══██╗████╗░██║██╔════╝░
  ███████║██║░░██║███████║██╔██╗██║██║░░██╗░
  ██╔══██║██║░░██║██╔══██║██║╚████║██║░░╚██╗
  ██║░░██║╚█████╔╝██║░░██║██║░╚███║╚██████╔╝
  ╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░`).stop();
  rainbow.render();
  /////////////////////////////////////////////////////////
  //========= Create start bot and make it loop =========//
  /////////////////////////////////////////////////////////

  function startBot(message) {
      (message) ? logger(message, "[ Starting ]") : "";

      const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
          cwd: __dirname,
          stdio: "inherit",
          shell: true
      });

      child.on("close",async (codeExit) => {
        var x = 'codeExit'.replace('codeExit',codeExit);
          if (codeExit == 1) return startBot("Restarting...");
           else if (x.indexOf(2) == 0) {
             await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                   startBot("Open ...");
         }
           else return; 
      });

      child.on("error", function (error) {
          logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
      });
  };
  ////////////////////////////////////////////////
  //========= Check update from Github =========//
  ////////////////////////////////////////////////


  axios.get("https://raw.githubusercontent.com/ducryovn/miraiv2/main/package.json").then((res) => { })
  startBot();
///////////////////////////////////////
////// Thông tin Bộ nhớ hệ thống///////
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  function bytesToGB(bytes) {
    return (bytes / 1024 / 1024 / 1024).toFixed(2);
  }
  const usedMemoryPercentage = ((totalMemory - freeMemory) / totalMemory) * 100 * 3;
  const cpuInfo = os.cpus();
  function getCpuUsage() {
  const cpus = os.cpus();
  const totalCpu = cpus.reduce((acc, cpu) => {
      return acc + cpu.times.user + cpu.times.nice + cpu.times.sys + cpu.times.idle + cpu.times.irq;
    }, 0);
    const totalIdle = cpus.reduce((acc, cpu) => {
      return acc + cpu.times.idle;
    }, 0);
    const totalUsed = totalCpu - totalIdle;
    const percentageCpu = ((totalUsed / totalCpu) * 100).toFixed(2);
    return percentageCpu;
  }
  const cpuUsage = getCpuUsage();
  const totalRam = os.totalmem();
  const freeRam = os.freemem();
  const usedRam = totalRam - freeRam;
  const ramUsagePercentage = (usedRam / totalRam) * 100;
  const ramUsage = bytesToGB(usedRam);
  const ramTotal = bytesToGB(totalRam);
  const ramFree = bytesToGB(freeRam);
  const diskSpace = os.freemem() / os.totalmem() * 400;
  const diskSpaceMB = diskSpace * 1024 / 100;
  const item = [{
      'thiết bị': 'Free Memory',
      'dung lượng': `${bytesToGB(totalMemory)} GB`,
      'phần trăm': `${(ramFree * 5 * 23).toFixed(2)} %`
  }, {
      'thiết bị': 'RAM',
      'dung lượng': `${Math.round(usedRam / (1024 * 1024 * 10))} MB`,
      'phần trăm': `${ramUsage} %`
  }, {
      'thiết bị': 'CPU',
      'dung lượng': `${cpuInfo.length} cores`,
      'phần trăm': `${cpuUsage} %`
  }, {
      'thiết bị': 'Disk',
      'dung lượng': `${diskSpaceMB.toFixed(0)} MB`,
      'phần trăm': `${diskSpace.toFixed(2)} %`
  }, {
      'thiết bị': 'CPU Usage',
      'dung lượng': `${Math.round(usedRam / (1524 * 1554 * 8))} MB`,
      'phần trăm': `${ramUsagePercentage.toFixed(2)} %`
  }, {
      'thiết bị': 'Memory Usage',
      'dung lượng': `${bytesToGB(freeMemory)} GB`,
      'phần trăm': `${usedMemoryPercentage.toFixed(2)} %`
  }];
console.table(item);
 process.on('unhandledRejection', (err, p) => {})
      .on('uncaughtException', err => { console.log(err); });
//// Code lại by DongDev

  //axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2_fix/main/package.json").then((res) => {
      //const local = JSON.parse(readFileSync('./package.json'));
      //if (semver['lt'](local.version, res['data']['version'])) {
         // if (local.autoUpdate == !![]) {
              //logger('A new update is available, start update processing...', '[ UPDATE ]');
             // const updateBot = {};
              //updateBot.cwd = __dirname
             // updateBot.stdio = 'inherit' 
            //  updateBot.shell = !![];
             // const child = spawn('node', ['update.js'], updateBot);
              //child.on('exit', function () {
               //   return process.exit(0);
             // })
              //child.on('error', function (error) {
                  //logger('Unable to update:' + JSON.stringify(error), '[ CHECK UPDATE ]');
           //   });
        //  } else logger('A new update is available! Open terminal/cmd and type "node update" to update!', '[ UPDATE ]'), 
        //  startBot();
     // } else logger('You are using the latest version!', '[ CHECK UPDATE ]'), startBot();
  //}).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));*/
  // THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
  //vẫn k hiểu tại s file bị v :v ae nào fix đc cho dùng ké nh
module.exports = async ({ api }) => {
  const logger = require('./utils/log.js')
  const configCustom = {
    autoRestart: {
      status: true,
      time: 300, //300 minutes
      note: 'Để tránh sự cố, hãy bật khởi động lại bot định kỳ'
    },
    accpetPending: {
      status: false,    
      time: 60, //60 minutes
      note: 'Phê duyệt tin nhắn chờ sau một thời gian nhất định'
    }
  }
  function autoRestart(config) {
    if(config.status) {
      setInterval(async () => {
        logger(`🔄 Bắt đầu khởi động lại hệ thống!`, "[ Auto Restart ]")
        process.exit(1)
      }, config.time * 60 * 1000)
    }
  }
  function accpetPending(config) {
    if(config.status) {
      setInterval(async () => {
          const list = [
              ...(await api.getThreadList(1, null, ['PENDING'])),
              ...(await api.getThreadList(1, null, ['OTHER']))
          ];
          if (list[0]) {    
              api.sendMessage('✅ Kiểm tra nhóm thành công (Đây là một tin nhắn tự động)', list[0].threadID);
          }
      }, config.time * 60 * 1000)
    }
  }
  autoRestart(configCustom.autoRestart)
  accpetPending(configCustom.accpetPending)
};
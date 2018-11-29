
!function(){
  var view = $('.message')
  var model = {
    fetch: function(){
      var query = new AV.Query('Message');
      return query.find()
    },
    save: function(){
      let content = $('input[name=message]')[0].value
      let name = $('input[name=name]')[0].value
      var Message = AV.Object.extend('Message')
      var message = new Message()
      return message.save({
        'name' : name,
        'content' : content
      })
    }
  }
  var controller = {
    view: null,
    model: null,
    init: function(view, model){
      this.view = view
      this.model = model
      this.initAV()
      this.loadMessage()
      this.bindEvents()
    },
    initAV: function(){
      var APP_ID = '0vWwvnMlj5M28NdF1TA8cx9K-gzGzoHsz';
      var APP_KEY = 'nWChS3uQtX1LIXWn8MAC52ur';
      
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    loadMessage: function(){
      model.fetch().then(function (messages) {
        let arr = messages.map(item => item.attributes)
        let messageList = $('#messageList')
        arr.forEach(function(item){
          if(item.name && item.content){
            let li = $('<li>'+ item.name  + ' : ' + item.content +'</li>')
            messageList.append(li)
          }
        })
      }, function (error) {
        alert('留言失败，请改天再来')
      });
    },
    bindEvents: function(){
      $(document).ready(function(){
        $('#messagePostForm').on('submit', function(e){
          e.preventDefault()
          model.save().then(function(object){
            if(object.attributes.name && object.attributes.content){
              let messageList = $('#messageList')
              let li = $('<li>'+ object.attributes.name  + ' : ' + object.attributes.content +'</li>')
              messageList.append(li)
              $('input[name=message]')[0].value = ''
              $('input[name=name]')[0].value = ''
            } else{
              alert('请重新输入')
              $('input[name=message]')[0].value = ''
              $('input[name=name]')[0].value = ''
            }
          })
        })
      })
    }
  } 
  controller.init(view, model)
}.call()


// // 创建 TestObject表
// var TestObject = AV.Object.extend('TestObject');
// // 在表中创建一行数据
// var testObject = new TestObject();
// // 数据内容是 words：“Hello World！”保存
// // 如果保存成功，然后运行alert
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

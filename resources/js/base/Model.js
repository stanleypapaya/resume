window.Model = function(options){
    var resourceName = options.resourceName
    return {
        fetch: function(){
            var query = new AV.Query(resourceName);
            return query.find()
          },
        save: function(object){
            var X = AV.Object.extend(resourceName)
            var x = new X()
            return x.save(object)

        },
    }
    
}



//var model = Model({resourceName: "Message"})

/*global Firebase 
  ToDo : Chat not completed  
  Issues: Firebase updates, need to check api 
*/
(function(angular) {
  'use strict';

  angular.module('App').service('MessageService', function(FIREBASE, $q, $firebaseArray) { 

   var messageRef = new Firebase(FIREBASE).startAt().limitToFirst(10); 

    var fireMessage = $firebaseArray(messageRef);  

    return { 

      childAdded: function childAdded(cb) { 

        messageRef.on('child_added', function(snapshot) {
         
          var val = snapshot.val(); 

          cb.call(this, { 

            user: val.user,
            text: val.text,
            name: snapshot.key() 
            
          });
        });
      }, 

      add: function addMessage(message) {
        return fireMessage.$add(message);
      }, 

      off: function turnMessagesOff() {
        fireMessage.$off();
      }, 

      pageNext: function pageNext(name, numberOfItems) { 

        var deferred = $q.defer();
        var messages = [];
        var pageMessageRef = new Firebase(FIREBASE).startAt(null, name).limitToFirst(numberOfItems);

        $firebaseArray(pageMessageRef).$on('loaded', function(data) { 

          var keys = Object.keys(data); 

          angular.forEach(keys, function(key) { 

            var item = data[key];
            item.name = key;
            messages.push(item); 

          }); 

          deferred.resolve(messages); 

        });

        return deferred.promise;
      }, 


      pageBack: function pageBack(name, numberOfItems) { 

        var deferred = $q.defer();
        var messages = [];
        var pageMessageRef = new Firebase(FIREBASE).endAt(null, name).limitToFirst(numberOfItems);

        $firebaseArray(pageMessageRef).$on('loaded', function(data) { 

          var keys = Object.keys(data); 

          angular.forEach(keys, function(key) { 

            var item = data[key];
            item.name = key;
            messages.push(item); 

          }); 

          deferred.resolve(messages); 

        });

        return deferred.promise;
      }
    };
  });


})(window.angular);

angular 
  .module("App")
    .service('Uploader', ['$firebaseArray', function($firebaseArray) {
      var ref = new Firebase("https://samengfire.firebaseio.com/upload");
      var episodes = $firebaseArray(ref);
      var id;
      return {
        all: episodes,
        create: function(img) {
          //Add to firebase db
          return episodes.$add(img).then(function(ref){
            id = ref.key();
            console.log('img id:', id);
          });
        },
        getAll: function(cb) {
          episodes.$loaded()
          .then(function(){
            var result = [];
            for (var i=0;i<episodes.length;i++) {
              result.push(episodes[i].$value.toString());
            }        
            console.log(result);
            cb(result);
          })
          .catch(function(err){
            console.log('inside getAll',err);
          });
    }
    };
    }])
    .controller('UploadController', function ($scope, Uploader) {
      $scope.loadClicked = false;
      $scope.episodes = Uploader.all;
      $scope.createEpisode = function() {
        console.log("createEpisode");
        console.log($scope.episodeImgData);
        console.log('$scope.episode',$scope.episode);
        Uploader.create($scope.episodeImgData);
      };
      $scope.handleFileSelectAdd = function(evt) {
        console.log("handleFileSelectAdd");
        console.log(evt.target);
        var f = evt.target.files[0];
        console.log("f:",f);
        var reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            var filePayload = e.target.result;
            $scope.episodeImgData = e.target.result; 
            document.getElementById('pano').src = $scope.episodeImgData; 
          };
        })(f);
        reader.readAsDataURL(f);
      };
      $scope.getImg = function() {
        $scope.loadClicked = true;
        Uploader.getAll(function(imgList){
          $scope.imgList = imgList;      
        });
      };
      document.getElementById('file-upload').addEventListener('change', $scope.handleFileSelectAdd, false);
    
});

  
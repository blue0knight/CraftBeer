angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Brian K',
    lastText: 'Going to tootsie\'s?',
    face: 'https://avatars.slack-edge.com/2016-04-15/35202759714_4ab0e910cdb5e17bb471_72.jpg'
  }, {
    id: 1,
    name: 'Ricky D',
    lastText: 'Have you seen her cleaves?',
    face:'https://avatars.slack-edge.com/2016-04-08/33338635559_67da205b6f55ea4a8805_72.jpg'
  }, {
    id: 2,
    name: 'Anthony R',
    lastText: 'I don\'t have an idea what you guys are talking about.',
    face: 'https://avatars.slack-edge.com/2016-05-28/46584417090_6a7d6425c16cb050f68d_72.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

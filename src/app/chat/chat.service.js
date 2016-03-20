(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .service('ChatService', ChatService);

  /** @ngInject */
  function ChatService() {
    var client1 = XMPP.createClient({
      jid: 'user1@localhost',
      password: 'user1',
      transport: 'websocket',
      wsURL: 'ws://localhost:5280/websocket'
    });
    var client2 = XMPP.createClient({
      jid: 'user2@localhost',
      password: 'user2',
      transport: 'websocket',
      wsURL: 'ws://localhost:5280/websocket'
    });

    var getClient1 = function() {
      return client1;
    }

    var getClient2 = function() {
      return client2;
    }

    var sendMessage = function(idClient, message) {
      if (idClient === 1) {
        client1.sendMessage({
          from: 'user1@localhost',
          to: 'user2@localhost',
          body: message
        });
      } else if (idClient === 2) {
        client2.sendMessage({
          from: 'user2@localhost',
          to: 'user1@localhost',
          body: message
        });
      }
    }

    return {
      getClient1: getClient1,
      getClient2: getClient2,
      sendMessage: sendMessage
    };
  }
})();

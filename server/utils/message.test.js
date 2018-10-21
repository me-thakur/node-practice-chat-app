const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Vivek';
    var text = "Anything";
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA("number");
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'User';
    var latitude = 1;
    var longitude = 1;
    var url = 'https://www.google.com/maps?q=1,1';
    var LocationMessage = generateLocationMessage(from, latitude, longitude);

    expect(LocationMessage.createdAt).toBeA('number');
    expect(LocationMessage).toInclude({from, url});
  });
});

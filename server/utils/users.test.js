const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Vivek',
      room: 'Node'
    }, {
      id: '2',
      name: 'Ronan',
      room: 'Node'
    }, {
      id: '3',
      name: 'Zoro',
      room: 'React'
    }];
  });

  it('should add new user', () => {
    var testusers = new Users();
    var user ={
      id: 123,
      name: 'Vivek',
      room: 'Office'
    };
    var resUser = testusers.addUser(user.id, user.name, user.room);

    expect(testusers.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

    it('should not remove a user', () => {
      var userId = '99';
      var user = users.removeUser(userId);

      expect(user).toNotExist();
      expect(users.users.length).toBe(3);
    });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  })

  it('should return names for Node', () => {
    var userList = users.getUserList('Node');

    expect(userList).toEqual(['Vivek', 'Ronan']);
  });

  it('should return name for React', () => {
    var userList = users.getUserList('React');

    expect(userList).toEqual(['Zoro']);
    });
});

import { should } from 'chai';

import userReducer, { initialState } from 'src/reducers/user';
import { changeValue, login } from 'src/actions/user';

should();

describe.only('Reducer for user', () => {
  describe('structure', () => {
    it('should be a function', () => {
      userReducer.should.be.a('function');
    });

    it('should return the initial state when called without arguments', () => {
      userReducer().should.eql(initialState);
    });
  });

  describe('with actions', () => {
    it('CHANGE_VALUE', () => {
      const action = changeValue('email', 'test@test.com');
      const stateDeDepart = {};
      const stateDArrivee = {
        email: 'test@test.com',
      };
      userReducer(stateDeDepart, action).should.eql(stateDArrivee);

      const stateDeDepartFull = {
        email: 'coucou@truc.com',
        password: 'toto123',
        logged: false,
      };
      const stateDArriveeFull = {
        email: 'test@test.com',
        password: 'toto123',
        logged: false,
      };
      userReducer(stateDeDepartFull, action).should.eql(stateDArriveeFull);
    });

    it('LOGIN', () => {
      const action = login();
      const stateDeDepartFull = {
        email: 'coucou@truc.com',
        password: 'toto123',
        logged: false,
      };
      const stateDArriveeFull = {
        email: 'coucou@truc.com',
        password: 'toto123',
        logged: false,
        loading: true,
      };
      userReducer(stateDeDepartFull, action).should.eql(stateDArriveeFull);
    });

    it('FINISH_LOADING');
  });
});

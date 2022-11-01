import jwtAxios from '../auth/jwt-auth/jwt-api';
import MockAdapter from 'axios-mock-adapter';

export default new MockAdapter(jwtAxios, {delayResponse: 100});

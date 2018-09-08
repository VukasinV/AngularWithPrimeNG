import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
    
    getToken() {
        return localStorage.getItem('token');
    }

    setToken(token) {
        localStorage.setItem('token', token);
    }

    clear() {
        localStorage.clear();
    }
}

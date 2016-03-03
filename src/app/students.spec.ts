import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {StarterApp} from '../app/students';

beforeEachProviders(() => [StarterApp]);

describe('App: Students', () => {
  it('should have the `defaultMeaning` as 42', inject([StarterApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([StarterApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});


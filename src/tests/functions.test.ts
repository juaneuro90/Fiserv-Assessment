import { expect } from 'chai';
import F from '../functions/functions';

describe('stringParser', () => {
  it('v1', () => {
    let result = F.v1Parse('JOHN0000MICHAEL0009994567');
    
    expect(result).to.be.an('object');
    expect(result).to.have.property('firstName').that.is.a('string');
    expect(result).to.have.property('lastName').that.is.a('string');
    expect(result).to.have.property('clientId').that.is.a('string');
  });
  
  it('v2', () => { 
    let result = F.v2Parse('JOHN0000MICHAEL0009994567');
    
    expect(result).to.be.an('object');
    expect(result).to.have.property('firstName').that.is.a('string');
    expect(result).to.have.property('lastName').that.is.a('string');
    expect(result).to.have.property('clientId').that.is.a('string');
  });
});
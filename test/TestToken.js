// test/Token.test.js
// SPDX-License-Identifier: MIT

const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN } = require('@openzeppelin/test-helpers');

// Load compiled artifacts
const Token = artifacts.require('Token');

// Start test block
contract('Token', function (accounts) {
  const [ initialHolder, recipient, anotherAccount ] = accounts;
  const name = 'Tola';
  const symbol = 'TOLA';
  const initialSupply = new BN('10000000000000000000000');

  beforeEach(async function () {
    this.token = await Token.new(initialSupply);
  });

  it('retrieve returns a value previously stored', async function () {
    // Use large integer comparisons
    expect(await this.token.totalSupply()).to.be.bignumber.equal(initialSupply);
  });

  it('has a name', async function () {
    expect(await this.token.name()).to.be.equal(name);
  });

  it('has a symbol', async function () {
    expect(await this.token.symbol()).to.be.equal(symbol);
  });

  it('has 18 decimals', async function () {
    expect(await this.token.decimals()).to.be.bignumber.equal('18');
  });
});
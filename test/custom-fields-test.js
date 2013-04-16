/*jslint node: true, maxlen: 100, maxerr: 50, indent: 2 */
/*global describe, it*/
'use strict';

var helpers       = require('./helpers.js');
var fs            = require('fs');
var should        = require('should');

var logFile       = __dirname + '/dataset/customformat.log';

describe('The server', function () {
  describe('receives a log on the HTTP POST / route with a specific log format', function () {
    it('and sends back a CSV containing the fields specified by the custom format',
        function (done) {
      var headers = {
        'Accept'            : 'text/csv',
        'LogFormat-ezproxy' : '%u %{col1}<[0-9]+> "%r" %{col2}<[A-Z]+>'
      };
      helpers.post('/', logFile, headers, function (error, res, body) {
        if (error) {
          throw error;
        }
        if (!res) {
          throw new Error('ezPAARSE is not running');
        }
        res.should.have.status(200);
        
        body = body.trim().split('\n');
        should.ok(body.length == 2, 'One EC should be returned');
        
        var csvheader = body[0].split(';');
        csvheader.should.include('col1');
        csvheader.should.include('col2');
        
        var ec        = body[1].split(';');
        ec.should.include('chucknorris');
        ec.should.include('012');
        ec.should.include('ABC');
        
        done();
      });
    });
  });
  describe('receives a log on the HTTP POST / route with given fields', function () {
    it('and sends back a CSV containing only the given fields',
        function (done) {
      var headers = {
        'Accept'            : 'text/csv',
        'LogFormat-ezproxy' : '%u %{col1}<[0-9]+> "%r" %{col2}<[A-Z]+>',
        'Output-Fields'     : 'col1,col2'
      };
      helpers.post('/', logFile, headers, function (error, res, body) {
        if (error) {
          throw error;
        }
        if (!res) {
          throw new Error('ezPAARSE is not running');
        }
        res.should.have.status(200);
        
        body = body.trim().split('\n');
        should.ok(body.length == 2, 'One EC should be returned');
        body[0].should.equal('col1;col2');
        body[1].should.equal('012;ABC');
        
        done();
      });
    });
  });
  describe('receives a log on the HTTP POST / route with additional fields', function () {
    it('and sends back a CSV containing the default fields and the given ones',
        function (done) {
      var headers = {
        'Accept'            : 'text/csv',
        'LogFormat-ezproxy' : '%u %{col1}<[0-9]+> "%r" %{col2}<[A-Z]+>',
        'Output-Fields'     : '+newCol1,newCol2'
      };
      helpers.post('/', logFile, headers, function (error, res, body) {
        if (error) {
          throw error;
        }
        if (!res) {
          throw new Error('ezPAARSE is not running');
        }
        res.should.have.status(200);
        
        body = body.trim().split('\n');
        should.ok(body.length == 2, 'One EC should be returned');
        
        var csvheader = body[0].split(';');
        csvheader.should.include('col1');
        csvheader.should.include('col2');
        csvheader.should.include('newCol1');
        csvheader.should.include('newCol2');
        
        var ec        = body[1].split(';');
        ec.should.include('chucknorris');
        ec.should.include('012');
        ec.should.include('ABC');
        
        done();
      });
    });
  });
});
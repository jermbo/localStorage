/**
 * CS_LocalStorage is a JavaScript helper library for HTML5 localStorage.
 *
 * v0.5.01
 *
 * http://localStorage.cosmicstrawberry.com
 *
 * Copyright (c) 2015 Jeremy "Jermbo" Lawson
 * Released under the MIT license.
 */

var CS_Storage = (function () {
	return {

		/**
		 * Create new item in localStorage
		 *
		 * @param key {string}
		 * @param value {object}
		 */
		create : function ( key, value, callback ) {
			var key = key || this.getNextID();
			if ( typeof value === 'object' ) {
				value = JSON.stringify( value );
			}
			localStorage.setItem( key, value );

			if ( callback && typeof( callback ) === "function" ) {
				callback();
			}
		},

		/**
		 * Get item from localStorage based on key.
		 *
		 * @param key
		 * @returns {*} - depends on whats in the value returns either string or JSON object
		 */
		get : function ( key ) {
			var data;

			if ( !this.hasData( key ) ) {
				console.log( 'Sorry nothing found with the key : ', key );
				return false;
			}

			data = localStorage[ key ];
			return JSON.parse( data );
		},
		
		/**
		 * OverWrite : completely rewrites the value of a give key, if key exists.
		 * If key does not exist, a document will be created
		 *
		 * @param key
		 * @param newData
		 * @returns {boolean}
		 */
		overWrite : function ( key, newData ) {
			//var data;
			if ( !this.hasData ) {
				console.log( 'Nothing currently exists in the db so this is creating it : ' + key );
				//this.create( key, newData );
				//return false;
			}
			//data = localStorage[ key ];
			this.create( key, newData );
		},

		// TODO: get desired item from database and update it with new info.
		// I think I should leave append to the client app,
		// since there is no real append to local storage.
		append    : function ( key ) {
			var k = key;
			return k;
			//var data = JSON.parse( localStorage[ key ] );
			//console.log( data );
			//
			//try {
			//	return JSON.parse( data );
			//} catch ( e ) {
			//	return data;
			//}
		},

		/**
		 * Delete : deleting item from localStorage
		 *
		 * @param key : unique identifier
		 */
		delete      : function ( key ) {
			if ( !this.hasData( key ) ) {
				console.log( 'Nothing with the db exists to delete : ' + key );
				return false;
			}
			localStorage.removeItem( key );
		},
		/**
		 * GetLastItem : helper method to get last method
		 * @returns {*}
		 */
		getLastItem : function () {
			return localStorage.getItem( localStorage.key( this.getLength() - 1 ) );
		},
		getLastKey  : function () {
			return localStorage.key( parseInt( this.getLastItem() ) - 1 );
		},
		/**
		 * GetLength : gives you the length of the localStorage
		 *
		 * @returns {Number}
		 */
		getLength   : function () {
			return localStorage.length;
		},
		/**
		 * GetNextID : helper method to give you a unique number if no key is provided.
		 *
		 * @returns {Number|number}
		 */
		getNextID   : function () {
			var last = this.getLength() || 0;
			console.log( last );
			last++;
			return last;
		},

		/**
		 * HasData : helper method to check for existence of a given key
		 *
		 * @param key
		 * @returns {boolean}
		 */
		hasData : function ( key ) {
			return !!localStorage[ key ] && !!localStorage[ key ].length;
		}

	};

})();

Actor.prototype.setSynckey = function(synckey) {
  this.synckey = synckey;
  // console.log("setting synckey " + synckey);
  return this;
};

Actor.prototype.syncs = function(){
  return (typeof this.synckey != 'undefined');
};

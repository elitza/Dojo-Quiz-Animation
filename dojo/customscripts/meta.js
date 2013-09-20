function scrolling(scene, layer, startHidden){
  if (typeof layer === 'undefined') layer = 1; // usually should be "neutral"
  if (typeof startHidden === 'undefined') startHidden = false;

  // borderscroll left
  scene.borderScrollLeft = scene.createActor('blank.png', 0, 0, 10, 660).isInLayer(layer);
  scene.borderScrollLeft.scrollsHorizontalOnHover(-1.1, 1.05, 7);
  scene.borderScrollLeft.direction = 'left';
  // scene.borderScrollLeft.setSynckey(scene.id + "-borderscrollleft");
  // if (startHidden) setInvisible(scene.borderScrollLeft);

  // borderscroll right
  scene.borderScrollRight = scene.createActor('blank.png', 950, 0, 10, 660).isInLayer(layer);
  scene.borderScrollRight.scrollsHorizontalOnHover(1.1, 1.05, 7);
  scene.borderScrollRight.direction = 'right';
  // scene.borderScrollRight.setSynckey(scene.id + "-borderscrollright");
  // if (startHidden) setInvisible(scene.borderScrollRight);

  // scroll-hand left
  scene.scrollleft = scene.createActor('links.png', 10, 280, 75, 77).isInLayer(layer);
  scene.scrollleft.scrollsByOnTouch(-350, 0, 1000);
  scene.scrollleft.scrollsHorizontalOnHover(-1.1, 1.05, 7);
  scene.scrollleft.direction = 'left';
  // scene.scrollleft.setSynckey(scene.id + "-scrollleft");
  // if (startHidden) setInvisible(scene.scrollleft);

  // scroll-hand right
  scene.scrollright = scene.createActor('rechts.png', 870, 280, 75, 77).isInLayer(layer);
  scene.scrollright.scrollsByOnTouch(250, 0, 1000);
  scene.scrollright.scrollsHorizontalOnHover(1.1, 1.05, 7);
  scene.scrollright.direction = 'right';
  // scene.scrollright.setSynckey(scene.id + "-scrollright");
  // if (startHidden) setInvisible(scene.scrollright);
  


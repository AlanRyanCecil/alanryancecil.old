'use strict';
angular.module('mainApp')
    .controller('PageStyleController', ['$scope', '$timeout', function ($scope, $timeout) {

    }])

    .directive('hyperSquare', ['$log', function($log){
        return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            scope: {
                size: '@',
                color: '@',
                opacity: '@',
                rx: '@',
                ry: '@'
            },
            link: function(scope, iElm, iAttrs, controller) {
                var scene = new THREE.Scene();
                var renderer = new THREE.WebGLRenderer({
                    antialias: true,
                    alpha: true
                });
                var light = new THREE.AmbientLight( 0xffffff );
                var camera;
                var box;

                function initScene () {
                    renderer.setSize( iAttrs.size, iAttrs.size );

                    renderer.setClearColor(0x555555, 0);
                    iElm.append(renderer.domElement);

                    scene.add(light);

                    camera = new THREE.PerspectiveCamera( 35, 1, 0.1, 1000 );
                    camera.position.z = 52;
                    scene.add( camera );

                    var sphere = new THREE.Mesh(
                        new THREE.SphereGeometry(15, 60, 2),
                        new THREE.MeshBasicMaterial( {
                            color: iAttrs.color,
                            transparent: true,
                            opacity: iAttrs.opacity,
                            wireframe: true
                        } )
                    );
                    scene.add(sphere);
                    render();

                    function render () {
                        sphere.rotation.z = 45 * (Math.PI / 180);
                        sphere.rotation.x += parseFloat(iAttrs.rx);
                        sphere.rotation.y += parseFloat(iAttrs.ry);
                        renderer.render(scene, camera);
                        requestAnimationFrame(render);
                    }
                }
                initScene();
                    }
                };
    }]);
angular.module('app').controller('mvMainCtrl', function($scope) {
	$scope.courses = [
		{name: 'C# for Sociopaths', featured: false, published: new Date('2015/07/01')},
		{name: 'C# for Non-Sociopaths', featured: false, published: new Date('2015/07/09')},
		{name: 'Super Duper Expert C#', featured: true, published: new Date('2015/07/16')},
		{name: 'Pedanic C++', featured: false, published: new Date('2015/07/24')},
		{name: 'Javascript for People over 20', featured: true, published: new Date('2015/07/29')},
		{name: 'Maintainable Code for Cowards', featured: false, published: new Date('2015/08/02')},
		{name: 'A Survuval Guide to Code Reviews', featured: true, published: new Date('2015/08/03')}
	]
});
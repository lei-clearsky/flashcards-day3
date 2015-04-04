app.controller('MainController', function ($scope, FlashCardsFactory) {

    $scope.flashCards = [];

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.loader = true;

    $scope.chosenCategory = 'All';

    $scope.getAllCards = function () {
        $scope.chosenCategory = 'All';
        $scope.loader = false;
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.loader = true;
            $scope.flashCards = cards;
        });
    };

    $scope.getCategoryCards = function (category) {
        $scope.chosenCategory = category;
        $scope.loader = false;
        FlashCardsFactory.getFlashCards(category).then(function (cards) {
            $scope.loader = true;
            $scope.flashCards = cards;
        });
    };

    $scope.getAllCards();

});
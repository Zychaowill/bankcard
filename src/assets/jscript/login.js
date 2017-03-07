(function () {
  var idCardCheck = /^\d{17}(\d|X)$/,
      passCheck = /\w{6,}/,
      spaceCheck = /\s/g;

    function togglePanel() {
      var height, dfd = $.Deferred();

      $("#logContainer").animate({
      	height: "0",
      	padding: "0"
      }, 500);

      if ($(window).width() < 768) {
        height = '400px';
      } else {
        height = '300px';
      }

      $("#regContainer").delay(500).animate({
        height: height,
        width: '30px'
      }, 500);

      dfd.resolve();

      return dfd.promise();
    }


  $("#conPassword").on('blur', function() {
    if ($(this).val() === $("#password").val()) {
      $("#conPassError").fadeOut();
      $(this).parents('.relative').removeClass('has-error').addClass('has-success');
    } else {
      $("#conPassError").fadeIn();
			$(this).parents(".relative").removeClass("has-success").addClass("has-error");
    }
  });

  /* 当选中文本框的时候，提示框消失*/
  function focusOn(input, error) {
    $(input).on('focus', function() {
      $(error).fadeOut();
    });
  }

  /* 身份证检查 */
  function idCheck(input, error) {
    $(input).on('blur', function() {
      var value = parseInt($(this).val());
      if (idCardCheck.test(value)) {
        $(error).fadeOut();
        $(this).parents('.relative').removeClass('has-error').addClass('has-success');
      } else {
        $(error).fadeIn();
        $(this).parents('.relative').removeClass('has-success').addClass('has-error');
      }
    });
  }

  /* 密码检验 */
  function passwordCheck(input, error) {
    $(input).on('blur', function() {
      var value = $(this).val();
      if (passCheck.test(value) && !spaceCheck.test(value)) {
        $(error).fadeOut();
        $(this).parents('.relative').removeClass('has-error').addClass('has-success');
      } else {
        $(error).fadeIn();
        $(this).parents('.relative').removeClass('has-success').addClass('has-error');
      }
    });
  }

  $("#logContainer").on('keyup', function(e) {
    if (e.keyCode === 13) {
      $("#go").trigger('click');
    }
  });

  $("#regContainer").on('keyup', function(e) {
    if (e.keyCode === 13) {
      $("#regGo").trigger('click');
    }
  });

  return {
    togglePanel: togglePanel,
    focusOn: focusOn,
    idCheck: idCheck,
    passwordCheck: passwordCheck
  };
})();

var win = this;
win.Effect = {
	register : {
			radioStyle : function(){
			var radioLabel = $(".radio-label");
			radioLabel.click(function(e){
				var value = $(this).siblings(".form-radio").val();
				$(".selected").css("display","none");
				$(this).children(".radioBtn").children(".selected").css("display","block");
				$("#register-form-radio-row").attr("radio",value);
			});
		}
	},
	gameHall : {
		newMark : true,
		helpMark : true,
		init : function(){
			win.Effect.gameHall.showMenu();
			win.Effect.gameHall.showHelp();
			win.Effect.gameHall.setScroll();
			win.Effect.gameHall.showTips();
		},
		showMenu : function(){
			var arrow = $('#hall-nav-arrow');
			var navBtn = $('.nav-btn');
			var content = $('.hall-content');
			for(var i = 0;i < navBtn.length;i++){
				$(navBtn[i]).attr("num",i);
			}
			$(navBtn).click(function(){
				var num = parseInt($(this).attr('num'));
				if(win.Effect.gameHall.newMark){
					$(arrow).css({
						'margin-top':parseInt(40*(num+1)+65*num+10)+'px',
						'display':'block'
					}).attr("num",num).animate({opacity:1},'fast');
					$(content[num]).css('display','block').animate({opacity:1},'fast');
					win.Effect.gameHall.newMark = false;
				}
				else{
					var curNum = parseInt(arrow.attr("num"));
					$(arrow).animate({marginTop:parseInt(40*(num+1)+65*num+10)+'px'},'fast');
					if( curNum != num ){
						$(content[curNum]).animate({opacity:0},'fast',function(){
							$(this).css('display','none');
						});
						$(content[num]).css('display','block').animate({opacity:1},'fast');
						arrow.attr("num",num);
					}
				}
			});
		},
		showHelp : function(){
			$('#hall-help').click(function(){
				if(win.Effect.gameHall.helpMark){
					$('#hall-help').animate({marginLeft:'600px'},'fast',function(){
						win.Effect.gameHall.helpMark = false;
						$('.hall-help-hidden-arrow').css({
							'-webkit-transform':'rotate(180deg)',
							'-moz-transform':'rotate(180deg)',
							'-o-transform':'rotate(180deg)',
							'transform':'rotate(180deg)'
						});
					});
				}
				else{
					$('#hall-help').animate({marginLeft:'0px'},'fast',function(){
						win.Effect.gameHall.helpMark = true;
						$('.hall-help-hidden-arrow').css({
							'-webkit-transform':'rotate(0deg)',
							'-moz-transform':'rotate(0deg)',
							'-o-transform':'rotate(0deg)',
							'transform':'rotate(0deg)'
						});
					});
				}
			});
		},
		setScroll : function(){
			var up = $('.hall-scroll-up');
			var down = $('.hall-scroll-down');
			up.click(function(){
				var parent = $(this).parent();
				var curScrollTop = parent.scrollTop();
				parent.animate({scrollTop:curScrollTop-170},'fast');
			});
			down.click(function(){
				var parent = $(this).parent();
				var curScrollTop = parent.scrollTop();
				parent.animate({scrollTop:curScrollTop+170},'fast');
			});
		},
		showTips : function(){
			var user = Users.findOne({_id:Cookie.get("user_id")});
			if(user){
				if(user.profile.new_mark == true){
					//by Sherlock ,it should modify later
					var i=0;
					var tutorialText = ['初来非诚勿扰，可是要先完成自己的资料的哦',
					'虽是游戏，但还是需要一些道具！可以试用哦，使用的话说不定有意想不到的收获！',
					'哈哈！作为男生有权利创建一个房间等待女嘉宾的到来哦！快快创建吧！',
					'女生可以随意选择一个心仪的房间进入游戏哦！'];
					$(".hall-tutorial").css("display","block");
					for(; i<3;i++){
						var box = $(win.ATemplate.hall_tutorail_box);
						if( i==2 && Cookie.get("gender") =='female'){
							i++;
						}
						box.addClass('hall-tutorial-box'+i);
						box.find('.tutorial-content').children('p').text(tutorialText[i]);
						box.appendTo('.hall-tutorial');
					}
					var num = 0;
					var tutorialBox = $('.hall-tutorial-box');
					$(tutorialBox[0]).css({
						'display':'block',
						'opacity':1
					});
					$(tutorialBox[2]).children('.tutorial-content').children('.tutorial-next-btn').text("开始游戏！");
					$('.tutorial-next-btn').click(function(){
						if( num != 2 ){
							$(tutorialBox[num]).animate({opacity:0},500,function(){
								$(this).css('display','none');
								$(tutorialBox[num+1]).css('display','block');
								$(tutorialBox[num+1]).animate({opacity:1},500);
								num++;
							});
						}
						else{
							$('.hall-tutorial').animate({opacity:0},500,function(){
								$(this).css('display','none');
								win.db.cencelNewMark();
							});
						}
					});
				}
			}
		}
	},
	Game : {
		init : function(){
			win.Effect.Game.constellationMatch();
			win.Effect.Game.topicRadioBox();
			win.Effect.Game.setScroll();
		},
		constellationMatch : function(){
			var boyDom = $(".game-boy-all");
			var girlDoms = $(".game-girl-all");
			var boy = win.Constellation.analysis(boyDom.attr("birth"));
			if(boy && girlDoms){
				var mark = true;
				for(var i = 0;i < girlDoms.length;i++){
					var girlDom = $(girlDoms[i]);
					var girl = win.Constellation.analysis(girlDom.attr("birth"));
					if(girl && girl.mark == boy.match){
						girlDom.find(".game-girl-circle").addClass("game-zodiac-match");
						mark = false;
					}
				}
				if(mark == false){
					boyDom.find(".game-boy-circle").addClass("game-zodiac-match");
				}
			}
		},
		topicRadioBox : function(){
			$(".game-radio-label").click(function(){
				var obj = $(this);
				var value = obj.children("span").text();
				$(".game-radio-selected").css("display","none");
				obj.children(".game-radio-outer").children(".game-radio-selected").css("display","block");
				obj.parents(".game-topic-form").attr("radio",value);
			});
		},
		setScroll : function(){
			$('.game-scroll-btn-down').click(function(){
				var dialogText = $(this).siblings('.game-text-box');
				var curScrollTop = $(dialogText).scrollTop();
				$(dialogText).animate({scrollTop:curScrollTop+200},500);
			});
			$('.game-scroll-btn-up').click(function(){
				var dialogText = $(this).siblings('.game-text-box');
				var curScrollTop = $(dialogText).scrollTop();
				$(dialogText).animate({scrollTop:curScrollTop-200},500);
			});
		}
	}
}
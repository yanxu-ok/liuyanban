<template>
	<view class="content">
		<!-- 头部 -->
		<image src="@/static/header.jpg" style="width: 100%;height: 420rpx;"></image>

		<!-- 头部 -->
		<view title>
			<view class="title">关于征集山东省“十四五”发展意见建议的公告</view>
			<view class="title_text">十四五”时期（2021-2025年），是我国全面建成小康社会、实现第一个百年奋斗目标之后，乘势而上开启全面建设社“十四五”时期（2021-2025年），是我国全面建成小康社会、实现第一个百年奋斗目标之后，乘势而上开启全面建设社会主义现代化国家新征程、向第二个百年奋斗目标进军的第一个五年，也是我省奋力实现”走在前列、全面开创”目标任务，推动高质量发展的关键五年。科学编制“十四五”规划，对于巩固提升全面建成小康社会成果，加快新时代现代化强省建设意义重大。为提高规划编制透明度、民主参与度，坚持开门编规划，健全公众参与机制，山东省发展改革委向社会各界征集我省“十四五”规划编制意见建议。</view>
			<view class="title">一、征集内容</view>
			<view class="title_text" style="text-indent: 0;">围绕我省经济建设、制造强省、数字经济、实体经济、创新型省份建设、乡村振兴、海洋强省、区域协调、深化改革、对外开放、公平法治、思想文化、教育卫生、就业创业、收入分配、社会保障、社会治理、防灾救灾、应急安全、生态文明、军民融合、党的建设等方面，提出意见建议。</view>
			<view class="title" style="margin-bottom: 0;">二、征集时间</view>
			<view class="title" style="margin-bottom: 0;">2020年9月1日至10月31日</view>
			<view class="title_text" style="text-indent: 0;margin-top: 0;">对于大家提出的意见建议，我们将认真整理并研究吸纳，感谢您的大力支持！</view>
		</view>

		<!-- 分割线 -->
		<div class="box">
			<span class="line" style="margin-right: 28rpx;"></span>
			<view class="text">我要建言</view>
			<span class="line" style="margin-left: 28rpx;"></span>
		</div>

		<!-- 头部 -->
		<view title style="height: auto;padding-left: 46rpx;">
			<view input>
				<view name>昵称</view>
				<input type="text" v-model="nickname" />
			</view>

			<view input style="margin-top: 40rpx;">
				<view name>手机</view>
				<input type="text" v-model="phone" />
			</view>

			<view input style="margin-top: 40rpx;width: 641rpx;">
				<view name>标题</view>
				<input type="text" v-model="title" />
			</view>

			<view input style="margin-top: 40rpx;width: 641rpx;height: 400rpx;">
				<textarea v-model="body" rows="8" cols="80" style="height: 100%;padding-left: 0;width: 100%;background-color: #fff1d9;padding:20rpx;padding-top: 40rpx;"
				 placeholder="请留下您的意见建议，我们将认真整理并研究 吸纳，感谢您的大力支持！"></textarea>
			</view>

		</view>

		<!-- <button type="default">页面主操作 Normal</button> -->
		<image @click="hadnleClick" src="../../static/41edeebed6bff7fdfce0cf1a711dc6f.png" style="width: 195rpx;height: 66rpx;margin: 30rpx auto;display: block;"></image>

		<view class="bottom">
			<view>
				<image src="@/static/bottom.jpg" style="width: 135rpx; height: 135rpx;"></image>
				<view style="margin-left: 30rpx;text-align: center;">
					<view style="font-size: 28rpx;color: white;font-weight: bold;">齐鲁网 闪电新闻出品</view>
					<view style="border: 1rpx solid white;margin: 5rpx auto;"></view>
					<view style="font-size: 28rpx;color: white;">欢迎扫描二维码下载闪电新闻客户端</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				nickname: '',
				phone: '',
				body: ''
			}
		},
		onLoad() {

		},
		methods: {
			hadnleClick() {
				if (!this.nickname) {
					uni.showToast({
						title: '请输入昵称!',
						icon: 'none'
					});
					return;
				}
				if (!this.phone) {
					uni.showToast({
						title: '请输入手机号!',
						icon: 'none'
					});
					return;
				}

				if (!this.title) {
					uni.showToast({
						title: '请输入标题!',
						icon: 'none'
					});
					return;
				}

				if (!this.body) {
					uni.showToast({
						title: '请输入内容!',
						icon: 'none'
					});
					return;
				}

				var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!myreg.test(this.phone)) {
					console.log(false);
					uni.showToast({
						title: '手机号有误!',
						icon: 'none'
					});
				} else {
					this.init()
				}



			},
			init() {
				console.log(this.$url, '挂在全局变量url');
				uni.request({
					// url: 'https://app.iqilu.com/v1/app/comment/shandianComment', 
					url: this.$url + '/v1/app/comment/shandianComment',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					data: {
						nickname: this.nickname,
						phone: this.phone,
						title: this.title,
						body: this.body
					},
					method: 'POST',
					success: (res) => {
						console.log(res.data);
						if(res.data.code == 1){
							uni.showToast({
								title: '发布成功!',
								icon: 'none'
							});
						}
						else{
							uni.showToast({
								title: '发布失败!',
								icon: 'none'
							});
						}
					}
				});
			}
		}
	}
</script>

<style>
	page {
		background: #f4deb9;
	}

	view[title] {
		width: 100%;
		height: 1261rpx;
		background: white;
		border-radius: 80rpx;
		box-sizing: border-box;
		padding: 50rpx 28rpx 50px 28rpx;
	}


	view[input] {
		display: flex;
		align-items: center;
		width: 450rpx;
		height: 65rpx;
		border-radius: 20rpx;
		overflow: hidden;
	}

	view[input] input {
		background-color: #fff1d9;
		height: 100%;
		width: 100%;
		padding: 0 10rpx;
	}

	view[name] {
		width: 120rpx;
		height: 100%;
		background: #ffc462;
		text-align: center;
		line-height: 65rpx;
		font-size: 33rpx;
		color: white;
	}

	.bottom {
		height: 238rpx;
		background: red;
		margin-top: 74rpx;
		display: flex;
		justify-content: center;

	}

	.bottom>view {
		display: flex;
		align-items: center;
	}

	/* 	h3{
		font-size: 33rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
	}
	h3::after ::before{
		content: '';
		border-bottom: 2rpx solid #e24242;
		display: block;
	} */

	.box {

		height: 40px;

		width: 100%;
		background-color: wheat;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 36rpx;
		margin: 30rpx 0;
	}

	.line {
		height: 6rpx;
		flex-grow: 1;
		background-color: #ff0000;
	}

	.text {
		margin: 0 10rpx;
		color: #ff0000;
		font-size: 36rpx;
	}

	.title {
		font-size: 28rpx;
		color: rgb(65, 65, 65);
		font-weight: bold;
	}

	.title_text {
		font-size: 28rpx;
		text-indent: 2em;
		margin-top: 20rpx;
		margin-bottom: 10rpx;
		line-height: 1.3rem;
		font-family: 400;
	}
</style>

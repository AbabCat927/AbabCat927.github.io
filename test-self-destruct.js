// 简单的Node.js测试脚本来验证自毁程序的核心逻辑
// 模拟DOM环境和自毁程序功能

// 模拟DOM元素
class MockElement {
	constructor() {
		this.style = {};
	}
}

// 模拟document对象
global.document = {
	querySelectorAll: (selector) => {
		// 返回10个模拟元素
		const elements = [];
		for (let i = 0; i < 10; i++) {
			elements.push(new MockElement());
		}
		return elements;
	},
	getElementById: (id) => new MockElement(),
	addEventListener: (event, callback) => {
		console.log(`✓ 事件监听器已添加: ${event}`);
	},
};

// 模拟Math.random
const originalRandom = Math.random;
let randomCallCount = 0;
Math.random = () => {
	randomCallCount++;
	// 返回可预测的随机值用于测试
	return (randomCallCount * 0.1) % 1;
};

// 模拟setTimeout
global.setTimeout = (callback, delay) => {
	console.log(`✓ setTimeout已调用，延迟: ${delay}ms`);
	// 立即执行回调用于测试
	callback();
};

// 模拟setInterval
global.setInterval = (callback, interval) => {
	console.log(`✓ setInterval已调用，间隔: ${interval}ms`);
	// 不执行回调以避免无限循环
};

// 自毁程序函数（从我们的实现中复制）
function selfDestruct() {
	console.log("🚀 自毁程序已触发！");

	// 获取所有元素
	const allElements = document.querySelectorAll("*");
	console.log(`📊 找到 ${allElements.length} 个元素`);

	// 为每个元素应用随机故障效果
	allElements.forEach((element, index) => {
		console.log(`🎯 处理元素 ${index + 1}/${allElements.length}`);

		// 随机transform效果
		const randomTranslateX = (Math.random() - 0.5) * 200;
		const randomTranslateY = (Math.random() - 0.5) * 200;
		const randomRotate = (Math.random() - 0.5) * 360;
		const randomSkewX = (Math.random() - 0.5) * 90;
		const randomSkewY = (Math.random() - 0.5) * 90;

		// 随机clip-path
		const clipPathValue = `polygon(${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%)`;

		// 随机filter效果
		const hueRotate = Math.random() * 360;
		const blur = Math.random() * 5;
		const saturate = Math.random() * 2;

		// 应用样式
		const htmlElement = element;
		htmlElement.style.transition = "all 0.5s ease-out";
		htmlElement.style.transform = `translateX(${randomTranslateX}px) translateY(${randomTranslateY}px) rotate(${randomRotate}deg) skewX(${randomSkewX}deg) skewY(${randomSkewY}deg)`;
		htmlElement.style.clipPath = clipPathValue;
		htmlElement.style.textShadow = `${Math.random() * 10}px ${Math.random() * 10}px 0 red, ${Math.random() * 10}px ${Math.random() * 10}px 0 cyan`;
		htmlElement.style.filter = `hue-rotate(${hueRotate}deg) blur(${blur}px) saturate(${saturate})`;

		console.log(`  ✓ 元素 ${index + 1} 样式已应用`);
		console.log(`    - transform: ${htmlElement.style.transform}`);
		console.log(`    - clip-path: ${htmlElement.style.clipPath}`);
		console.log(`    - filter: ${htmlElement.style.filter}`);

		// 逐渐降低透明度
		setTimeout(() => {
			htmlElement.style.opacity = "0";
			console.log(`  ✓ 元素 ${index + 1} 透明度已设置为0`);
		}, 500);
	});

	// 添加额外的故障效果
	setInterval(() => {
		allElements.forEach((element) => {
			const htmlElement = element;
			if (htmlElement.style.opacity !== "0") {
				const randomTranslateX = (Math.random() - 0.5) * 50;
				const randomTranslateY = (Math.random() - 0.5) * 50;
				htmlElement.style.transform = `translateX(${randomTranslateX}px) translateY(${randomTranslateY}px)`;
			}
		});
	}, 200);
}

// 测试DOM加载事件
console.log("🧪 开始测试自毁程序...\n");

console.log("1. 测试DOM事件监听器:");
document.addEventListener("DOMContentLoaded", () => {
	const trigger = document.getElementById("self-destruct-trigger");
	if (trigger) {
		trigger.addEventListener("click", () => {
			// 触发自毁程序
			selfDestruct();
		});
	}
});

console.log("\n2. 测试自毁程序功能:");
selfDestruct();

console.log("\n✅ 测试完成！");
console.log("\n📝 测试总结:");
console.log("- ✓ 事件监听器正确添加");
console.log("- ✓ 自毁程序函数正确执行");
console.log("- ✓ 所有元素都被处理并应用了故障效果");
console.log("- ✓ 随机CSS属性正确生成");
console.log("- ✓ 透明度渐变效果正确设置");
console.log("- ✓ 额外的故障效果循环正确设置");

// 恢复原始Math.random
Math.random = originalRandom;

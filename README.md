# baoma-mall（宝妈商城，技术名）

独立项目，与黑柏科技无关。品牌名未定（备选：妈咪星选 / 暖妈集市 / 星妈集市 / 宝妈好物社），仓库用技术名 `baoma-mall`，品牌定后只改显示名，不改仓库名。

## 模式（已定）
- 一人一个小店，宝妈自营：自己找货、上架、定价、客服、发货、售后。
- 开店免费。交易收 1% 技术服务费：100 元订单，宝妈 99 元，微信手续费 0.6 元，平台净得 0.4 元。
- 钱走微信分账到宝妈零钱，宝妈不用自己开商户号。
- 商品池：我们提供功能，不直接供货；默认是宝妈自己的货池。
- AI 图片 / 视频按次收费，利润薄，具体价等黑柏成本出来后定。
- 装修等人工服务另外收费，单独下单。
- 邀请码入驻：一码开一店，先 20–50 家试点跑通再放量。

## 技术路线：全部自研
- 小程序前端：uni-app + Vue 3 + TypeScript
- 后端：NestJS 单体 + MySQL 8 + Redis
- 支付：微信支付 V3 + 微信分账 API（开发前先核对分账接收方、比例、到账、退款、提现限额）

## 目录
- `apps/miniapp` 小程序前端（uni-app）
- `apps/server` 后端（NestJS）
- `prisma/schema.prisma` 核心表
- `宝妈商城立项方案-v1.md` 立项方案

## 本地运行（底座骨架，未装依赖）
```bash
# 后端
cd apps/server && npm install && cp ../../.env.example .env && npm run start:dev
# 小程序：用 HBuilderX 打开 apps/miniapp，或 npm run dev:mp-weixin
```
MySQL + Redis 可用 `docker compose up -d` 起本地容器（见 docker-compose.yml）。

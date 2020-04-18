<template>
  <div class="home page">
    <div class="homeHeader">
      <div class="homeHeader_top">
        <div class="balance">
          <div class="balance_sur">
            <span>￥</span>
            <span class="balance_sur_num">62,485.56</span>
            <span class="balance_eye">
              <img src="../../assets/img/home/eye on.png" alt />
            </span>
          </div>
          <div class="balance_bb">总资产(元)</div>
        </div>
        <div class="portrait">
          <img src="../../assets/img/home/Rectangle 5.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="less" scoped>
.homeHeader {
  width: 100%;
  height: 291px;
  background: url("../../assets/img/home/Rectangle 1.png");
  .homeHeader_top {
    display: flex;
    justify-content: space-between;
    margin: 0 24px;
    .balance {
      margin-top: 64px;

      .balance_sur {
        font-family: Noto Sans CJK;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        color: #ffffff;
        margin-bottom: 4px;
        .balance_sur_num {
          margin: 0 14px 0 10px;
        }
      }
      .balance_bb {
        font-family: Noto Sans CJK;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #f5f5f5;
        opacity: 0.64;
      }
    }
    .portrait {
      margin-top: 64px;
      width: 48px;
      height: 48px;
      border: 2px solid #ffffff;
      box-sizing: border-box;
      border-radius: 16px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
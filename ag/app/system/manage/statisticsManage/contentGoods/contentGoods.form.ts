export class ContentGoodsForm {
  public companyId: number;
  public itemId: number;
  public pushType: string;
  public startDate: string;
  public currentPage: number;
  // 结束日期
  public endDate: string;
  // 排序所用列名
  public orderByType: string;
  // 排序（升 asc 降 desc）
  public sortType: string;
  // 售卖机编码集
  public vmCodes: string;
  // 当前登录者公司
}

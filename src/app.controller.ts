import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('product/filter')
  getProductFilter() {
    return 'I am a filter';
  }

  @Get('product/:id')
  getProduct(@Param() params: any) {
    return `Product ${params.id}`;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategoryAndProduct(
    @Param('categoryId') cid: string,
    @Param('productId') pid: string,
  ) {
    return `Category ${cid} Product ${pid} `;
  }

  @Get('products')
  getDynamicParams(@Query() params: any) {
    const { limit, offset } = params;
    return `This is the limit ${limit}, and this is the offset ${offset}`;
  }

  @Get('productsv2')
  getDynamicQuery(
    @Query('limit') limit = 10,
    @Query('offset') offset = 1,
    @Query('brand') brand: string,
  ) {
    return `This is the limit ${limit}, and this is the offset ${offset}, and brand ${brand}`;
  }
}

import { ProductService } from "./products/shared/product.service"

describe("test", () => {
	it("one test", () => {
		expect(true).toBe(true)
	})

	let productService: ProductService, mockHttp

	beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['get'])
        productService = new ProductService(mockHttp)		
	})

	describe('get products', () => {
		it('get call', () => {
            mockHttp.get.and.returnValue([])
			expect(mockHttp.get).toHaveBeenCalledWith("http://localhost:8080/v1/products")
		})
	})
})
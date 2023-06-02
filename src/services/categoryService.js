import httpService from './httpService';

const categoryService = {
  getAll(params = {}) {
    const url = '/categories';
    return httpService.get(url, { params });
  },

  addCategory(data) {
    const url = '/categories';
    return httpService.post(url, data);
  },

  detailCategory(id) {
    const url = `/categories/${id}`;
    return httpService.get(url);
  },

  updateCategory(id, data) {
    const url = `/categories/${id}`;
    return httpService.patch(url, data);
  },

  deleteCategory(id) {
    const url = `/categories/${id}`;
    return httpService.delete(url);
  },
};

export default categoryService;

<template>
<div class="table-container">
    <table>
        <thead>
            <tr>
                <th @click="sortBy('id')">
                    ID <i class="fas" :class="sortIcon('id')"></i>
                </th>
                <th @click="sortBy('name')">
                    姓名 <i class="fas" :class="sortIcon('name')"></i>
                </th>
                <th @click="sortBy('email')">
                    邮箱 <i class="fas" :class="sortIcon('email')"></i>
                </th>
                <th @click="sortBy('department')">
                    部门 <i class="fas" :class="sortIcon('department')"></i>
                </th>
                <th @click="sortBy('status')">
                    状态 <i class="fas" :class="sortIcon('status')"></i>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in paginatedUsers" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.department }}</td>
                <td>
                    <span :class="['status', user.status]">
                        {{ user.status === 'active' ? '活跃' : '非活跃' }}
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    
    <div class="empty-state" v-if="filteredUsers.length === 0">
        <i class="fas fa-inbox"></i>
        <p>没有找到匹配的记录</p>
    </div>
</div>
</template>

<script setup>
import {ref,computed} from 'vue'
const users = ref([]);
const searchQuery = ref('');
const sortField = ref('id');
const sortDirection = ref('asc');
const currentPage = ref(1);
const itemsPerPage = ref(10);

const paginatedUsers = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return sortedUsers.value.slice(start, end);
});
const generateUsers = () => {
    const departments = ['技术部', '市场部', '销售部', '人力资源', '财务部', '产品部'];
    const statuses = ['active', 'inactive'];
    
    return Array.from({ length: 50 }, (_, i) => {
        const id = i + 1;
        const name = `用户 ${id}`;
        const email = `user${id}@example.com`;
        const department = departments[Math.floor(Math.random() * departments.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        
        return { id, name, email, department, status };
    });
};
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    color: #2c3e50;
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

header {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #3498db;
}

.description {
    font-size: 1.1rem;
    color: #7f8c8d;
    max-width: 800px;
    margin: 0 auto;
}

.card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-bottom: 30px;
}

.table-controls {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    background: #f8f9fa;
    border-bottom: 1px solid #eaeaea;
}

.search-box {
    position: relative;
    flex-grow: 1;
    max-width: 400px;
}

.search-box input {
    width: 100%;
    padding: 12px 20px 12px 45px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s;
}

.search-box input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.search-box i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #95a5a6;
}

.records-info {
    font-size: 0.9rem;
    color: #7f8c8d;
}

.table-container {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    background-color: #3498db;
    color: white;
    text-align: left;
    padding: 16px;
    cursor: pointer;
    user-select: none;
    position: relative;
    font-weight: 500;
}

th:hover {
    background-color: #2980b9;
}

th i {
    margin-left: 8px;
    font-size: 0.8rem;
}

td {
    padding: 16px;
    border-bottom: 1px solid #eaeaea;
}

tr:nth-child(even) {
    background-color: #f8f9fa;
}

tr:hover {
    background-color: #ecf0f1;
}

.pagination {
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 8px;
}

.pagination button {
    padding: 10px 16px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
}

.pagination button:hover:not(:disabled) {
    background: #3498db;
    color: white;
    border-color: #3498db;
}

.pagination button.active {
    background: #3498db;
    color: white;
    border-color: #3498db;
}

.pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.empty-state {
    text-align: center;
    padding: 40px;
    color: #7f8c8d;
}

.empty-state i {
    font-size: 3rem;
    margin-bottom: 15px;
    color: #bdc3c7;
}

@media (max-width: 768px) {
    .table-controls {
        flex-direction: column;
        align-items: stretch;
    }
    
    .search-box {
        max-width: 100%;
    }
    
    th, td {
        padding: 12px 8px;
    }
    
    .pagination {
        flex-wrap: wrap;
    }
}
</style>
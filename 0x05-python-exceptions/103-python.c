#include <Python.h>

void print_python_list(PyObject *p)
{
    PyListObject *list;
    Py_ssize_t size, i;
    PyObject *item;

    if (!PyList_Check(p)) {
        printf("Error: Invalid PyListObject\n");
        return;
    }

    list = (PyListObject *)p;
    size = Py_SIZE(list);

    printf("[*] Python list info\n");
    printf("[*] Size of the Python List = %ld\n", size);
    printf("[*] Allocated = %ld\n", list->allocated);

    for (i = 0; i < size; i++) {
        item = PyList_GET_ITEM(list, i);
        printf("Element %ld: %s\n", i, Py_TYPE(item)->tp_name);
    }
}

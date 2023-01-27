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

void print_python_bytes(PyObject *p)
{
    PyBytesObject *bytes;
    Py_ssize_t size, i;

    if (!PyBytes_Check(p)) {
        printf("Error: Invalid PyBytesObject\n");
        return;
    }

    bytes = (PyBytesObject *)p;
    size = PyBytes_GET_SIZE(bytes);

    printf("[*] Python bytes info\n");
    printf("[*] Size of the Python Bytes = %ld\n", size);
    printf("[*] First %ld bytes: ", size < 10 ? size : 10);
    for (i = 0; i < size && i < 10; i++)
        printf("%02x ", (unsigned char)PyBytes_AS_STRING(bytes)[i]);
    printf("\n");
}

void print_python_float(PyObject *p)
{
    PyFloatObject *float;

    if (!PyFloat_Check(p)) {
        printf("Error: Invalid PyFloatObject\n");
        return;
    }

    float = (PyFloatObject *)p;

    printf("[*] Python float info\n");
    printf("[*] Value: %f\n", float->ob_fval);
}


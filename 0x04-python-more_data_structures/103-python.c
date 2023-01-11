#include <Python.h>

/**
 * print_python_list - prints some basic info about Python lists
 * @p: Python object (list)
 */
void print_python_list(PyObject *p)
{
    Py_ssize_t size, i;
    PyObject *item;

    size = PyList_Size(p);
    printf("[*] Python list info\n");
    printf("[*] Size of the Python List = %lu\n", (unsigned long)size);
    printf("[*] Allocated = %lu\n", (unsigned long) ((PyListObject *)p)->allocated);
    for (i = 0; i < size; i++)
    {
        item = PyList_GetItem(p, i);
        printf("Element %lu: %s\n", (unsigned long)i, Py_TYPE(item)->tp_name);
    }
}

/**
 * print_python_bytes - prints some basic info about Python bytes objects
 * @p: Python object (bytes)
 */
void print_python_bytes(PyObject *p)
{
    char *str;
    Py_ssize_t size, i;

    if (!PyBytes_Check(p))
    {
        printf("[ERROR] Invalid Bytes Object\n");
        return;
    }

    size = PyBytes_Size(p);
    str = PyBytes_AsString(p);
    printf("[*] Python bytes info\n");
    printf("  size: %lu\n", (unsigned long)size);
    printf("  trying string: %s\n", str);
    printf("  first %lu bytes:", (unsigned long)size < 10 ? size : 10);
    for (i = 0; i < (unsigned long)size && i < 10; i++)
        printf(" %02x", (unsigned char)str[i]);
    printf("\n");
}

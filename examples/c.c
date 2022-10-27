
// 1. Example ----------------------------------

#include <stdio.h>

int main(void)
{
  printf("hello, world\n");
}


// 2. Tests ----------------------------------


#include "stdio.h"

int main()
{
  printf("sizeof(int) = %zu", sizeof(int));
  return 0;
}




// c
int Ecriture() {}
int Écriture() {}
int très_bien() {}



#include <utility>
class resource {
	int x = 0;
};
class foo
{
	public:
		foo()
			: p{new resource{}}
		{ }
		foo(const foo& other)
			: p{new resource{*(other.p)}}
		{ }
		foo(foo&& other)
			: p{other.p}
		{
			other.p = nullptr;
		}
		foo& operator=(foo other)
		{
			swap(*this, other);
			return *this;
		}
		~foo()
		{
			delete p;
		}
		friend void swap(foo& first, foo& second)
		{
			using std::swap;
			swap(first.p, second.p);
		}
	private:
		resource* p;
};

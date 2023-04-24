#include<bits/stdc++.h>
#include <GL/gl.h>
#include <GL/glu.h>
#include <Gl/glut.h>
#include <stdlib.h>
#include<bits/stdc++.h>
using namespace std;
const double PI=3.14;

static void drawCircle(GLfloat Rx,GLfloat Ry,GLfloat center_X,GLfloat center_Y,GLfloat startof,GLfloat endof,GLfloat Read,GLfloat Green,GLfloat Blue,bool b)
{
    GLint i;
    GLfloat cosine, sine;
    glColor3f(Read, Green, Blue);
    if(b) glBegin(GL_POLYGON);
    else glBegin(GL_LINE_STRIP);
    for(i=startof; i<endof; i++)
    {
        cosine=Rx*cos(i*2*PI/360.0)+center_X;
        sine=Ry*sin(i*2*PI/360.0)+center_Y;
        glVertex2f(cosine,sine);
    }
    glEnd();
}

static void drawCircles(GLfloat Rx,GLfloat Ry,GLfloat RXChild,GLfloat RYChild,GLfloat center_X,GLfloat center_Y,GLfloat startof,GLfloat endof,GLfloat Read,GLfloat Green,GLfloat Blue,GLint number,bool b)
{
    GLint i;
    GLfloat cosine, sine;
    for(i=0; i<number; i++)
    {
        cosine=Rx*cos(i*2*PI/number)+center_X;
        sine=Ry*sin(i*2*PI/number)+center_Y;
        drawCircle(RXChild,RYChild,cosine,sine,startof,endof,Read,Green,Blue,b);
    }
    glEnd();
}


static void drawNumber(GLfloat Rx,GLfloat Ry,GLfloat center_X,GLfloat center_Y,GLint number)
{
    GLint i;
    int numClock[12][2]={{51,0},{50,0},{49,0},{49,50},{49,49},{49,48},{57,0},{56,0},{55,0},{54,0},{53,0},{52,0}};
    GLfloat cosine, sine;
    for(i=0; i<number; i++)
    {
        cosine=Rx*cos(i*2*PI/number)+center_X;
        sine=Ry*sin(i*2*PI/number)+center_Y;
        glColor3f(0.0, 0.0, 0.0);
        glLineWidth(3);
        if(numClock[i][1]==0){
            glTranslated(cosine-4,sine-5,0);
            glScaled(0.1,0.1,0);
            glutStrokeCharacter(GLUT_STROKE_ROMAN,numClock[i][0]);
        }
        else{
            glTranslated(cosine-8,sine-5,0);
            glScaled(0.1,0.1,0);
            for(int j=0;j<2;j++){
                glutStrokeCharacter(GLUT_STROKE_ROMAN,numClock[i][j]);
            }
        }
        glLoadIdentity();
        glTranslatef(0,0,-200.0);
    }
    glEnd();
}


static void drawSquare(GLdouble r,GLdouble w,GLdouble h)
{
    GLfloat R,center_X,center_Y,startof,endof,cosine, sine;
    GLint i;
#define drawVertexCircle(  R, center_X, center_Y, startof, endof)\
        for(i=startof;i<endof;i++){\
            cosine=R*cos(i*2*PI/360.0)+center_X;\
            sine=R*sin(i*2*PI/360.0)+center_Y;\
            glVertex2f(cosine,sine);\
        }
    w=w-r;
    h=h-r;
    glBegin(GL_POLYGON);
    GLdouble rad=2*PI/360.0;
    drawVertexCircle(r,w,h,0,90);
    drawVertexCircle(r,-w,h,90,180);
    drawVertexCircle(r,-w,-h,180,270);
    drawVertexCircle(r,w,-h,270,360);
    glEnd();
}



static void timer(int){
    glutPostRedisplay();
    glutTimerFunc(1000/60,timer,0);
}


static void redraw(void)
{
    float a_sec = 0,a_min=0,a_hour=0;
    glClearColor(1.0,1.0,1.0,1.0);

    glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);

    glLoadIdentity();

    glTranslatef(0,0,-200.0);

    time_t CLK = time(0);
    tm *clk = localtime(&CLK);
    int time[3] = {clk->tm_hour,clk->tm_min,clk->tm_sec};
    for (int p = 0 ; p < 3 ; p++)
    {
        time[p]-= ( !p && time[p] > 12 ? 12 : 0 );
        if(p==0 && time[p]==0)time[p]=12;
    }
    a_hour = (time[0]+(time[1]/60.0))*30;
    a_min  = (time[1]+(time[2]/60.0))*6;
    a_sec  = time[2]*6;

    //draw clock
    glColor3f(0,0,0);
    drawCircle(105,105,0,0,0,360,0,0,0,1);
    drawCircle(100,100,0,0,0,360,0.8,0.8,0.8,1);

    //drow points hour
    drawNumber(85,85,0,0,12);
    //drawCircles(85,85,5,5,0,0,0,340,0,0,0,12,1);


    //drow points min
    //drawCircles(85,85,1,1,0,0,0,340,0,0,0,60,1);

    // drow sec
    glRotatef(-a_sec,0,0,1);
    glTranslated(0,40,0);
    glColor3f(1,0,0);
    drawSquare(1,0.6,50);

    //initial
    glLoadIdentity();
    glTranslatef(0,0,-200.0);

    //drow min
    glRotatef(-a_min,0,0,1);
    glTranslated(0,40,0);
    glColor3f(0,0,0);
    drawSquare(1,1.2,40);

    //initial
    glLoadIdentity();
    glTranslatef(0,0,-200.0);

    //drow hour
    glRotatef(-a_hour,0,0,1);
    glTranslated(0,30,0);
    glColor3f(0,0,0);
    drawSquare(2,1.7,30);

     //initial
    glLoadIdentity();
    glTranslatef(0,0,-200.0);

    drawCircle(6,6,0,0,0,360,0,0,0,1);

    glutSwapBuffers();

}





int main(int argc, char**argv)
{
    glutInit(&argc,argv);
    glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE | GLUT_DEPTH);
    glutInitWindowPosition(100,100);
    glutInitWindowSize(400,400);
    glutCreateWindow("Clock");
    glutDisplayFunc(redraw);
    glutTimerFunc(1000,timer,0);
    glMatrixMode(GL_PROJECTION);
    gluPerspective(60,1,10,201.0);
    glMatrixMode(GL_MODELVIEW);
    glutMainLoop();
    return 0;
}

